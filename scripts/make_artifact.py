"""Prepare dist-artifact/ (from `vite build --mode artifact`) for publishing
as a claude.ai Artifact: writes dist-artifact/artifact.html, the full page
with the company name as its <title> (the host uses it as the artifact's
name). Publish it as index.html alongside the other files in dist-artifact/.
"""
import re
from pathlib import Path

out = Path(__file__).resolve().parent.parent / "dist-artifact"
html = (out / "index.html").read_text()
html = re.sub(r"<title>.*?</title>", "<title>Fix Bolingo International Limited</title>", html, count=1)
(out / "artifact.html").write_text(html)
print("wrote", out / "artifact.html")
