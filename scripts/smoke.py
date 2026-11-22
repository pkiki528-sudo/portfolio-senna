"""Run against npm start: python scripts/smoke.py [http://127.0.0.1:3000].
Requires Playwright Python and Chromium (pip install playwright; playwright install chromium).
"""
import shutil
import sys
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3000"
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=shutil.which("google-chrome"), headless=True, args=["--no-sandbox"])
    page = browser.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    for width in (320, 375, 768, 1440):
        page.set_viewport_size({"width": width, "height": 900})
        response = page.goto(url, wait_until="networkidle")
        assert response is not None and response.status == 200, response
        page.wait_for_function("document.querySelector('h1').getBoundingClientRect().height > 0")
        for link in page.locator("header a").all():
            assert link.is_visible(), f"Hidden navigation at {width}px: {link.inner_text()}"
            box = link.bounding_box()
            assert box is not None
            assert box["x"] >= 0 and box["x"] + box["width"] <= width, f"Header overflow at {width}px: {link.inner_text()}"
        for target in ("about", "skills", "projects", "contact", "home"):
            page.locator(f'nav a[href="#{target}"]').click()
            page.evaluate("window.smokeScroll = { y: null, frames: 0 }")
            page.wait_for_function("id => { const s = window.smokeScroll; s.frames = s.y === scrollY ? s.frames + 1 : 0; s.y = scrollY; const y = document.getElementById(id).getBoundingClientRect().top; return s.frames >= 10 && y >= document.querySelector('header').getBoundingClientRect().bottom - 1 && y < innerHeight; }", arg=target)
            section_box = page.locator(f"#{target}").bounding_box()
            header_box = page.locator("header").bounding_box()
            assert section_box is not None and header_box is not None
            top = section_box["y"]
            header_bottom = header_box["height"]
            assert top >= header_bottom - 1, f"#{target} hidden behind header at {width}px: {top} < {header_bottom}"
        assert page.locator('img[src="/avatar.jpg"]').evaluate("img => img.complete && img.naturalWidth > 0"), "Avatar failed to load"
        assert not errors, errors
        print(f"PASS {width}px: navigation, anchor positions, avatar, no browser errors")
    browser.close()
