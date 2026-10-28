"""Turn dist-artifact/ (from `vite build --mode artifact`) into a page the
claude.ai Artifact host accepts: it wraps the page in its own
<html>/<head>/<body>, so those tags are stripped and the head and body
contents are kept in order. Writes dist-artifact/artifact.html.
"""
import re
from pathlib import Path

out = Path(__file__).resolve().parent.parent / "dist-artifact"
html = (out / "index.html").read_text()
html = re.sub(r"<!doctype html>\s*", "", html, flags=re.I)
html = re.sub(r"</?(html|head|body)\b[^>]*>\s*", "", html, flags=re.I)
# The host uses <title> as the artifact's name; keep it to the company name
html = re.sub(r"<title>.*?</title>", "<title>Fix Bolingo International Limited</title>", html, count=1)
(out / "artifact.html").write_text(html.strip() + "\n")
print("wrote", out / "artifact.html")
