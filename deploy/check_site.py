"""Validate the Web Loom Zone app and, with --url, its running container."""
import argparse
from pathlib import Path
import time
from urllib.error import HTTPError, URLError
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
PAGES = ["/", "/services", "/work", "/pricing", "/about"]
SOURCE = [
    "package.json",
    "package-lock.json",
    "next.config.ts",
    "Dockerfile",
    "deploy/nginx.conf",
    "deploy/start.sh",
    "app/layout.tsx",
    "app/page.tsx",
    "app/services/page.tsx",
    "app/work/page.tsx",
    "app/pricing/page.tsx",
    "app/about/page.tsx",
    "app/healthz/route.ts",
]
PRIVATE = [
    "/.git/config",
    "/Dockerfile",
    "/deploy/nginx.conf",
    "/deploy/start.sh",
    "/.github/workflows/docker-publish.yml",
    "/.env",
    "/package.json",
]


def main():
    arg = argparse.ArgumentParser()
    arg.add_argument("--url")
    args = arg.parse_args()

    errors = []
    for relative in SOURCE:
        if not (ROOT / relative).is_file():
            errors.append(f"Missing file: {relative}")
    config = ROOT / "next.config.ts"
    if config.is_file() and 'output: "standalone"' not in config.read_text(encoding="utf-8"):
        errors.append("next.config.ts must set output: \"standalone\" for the Docker image.")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Validated {len(PAGES)} routes and the deployment files.")

    if not args.url:
        return

    base = args.url.rstrip("/")
    for attempt in range(40):
        try:
            with urlopen(base + "/healthz", timeout=2) as response:
                if response.read().strip() != b"ok":
                    raise SystemExit("Health check did not return ok.")
            break
        except (URLError, TimeoutError):
            if attempt == 39:
                raise
            time.sleep(0.5)

    for path in PAGES:
        with urlopen(base + path, timeout=10) as response:
            body = response.read()
            if response.status != 200:
                raise SystemExit(f"HTTP check failed: {path}")
            if path == "/" and b"Web Loom Zone" not in body:
                raise SystemExit("Homepage did not contain the site name.")

    for ref in PRIVATE:
        try:
            with urlopen(base + ref, timeout=5):
                raise SystemExit(f"Private file is publicly accessible: {ref}")
        except HTTPError as error:
            if error.code not in (403, 404):
                raise
    print(f"HTTP checks passed for {len(PAGES)} pages; deployment files are not served.")


if __name__ == "__main__":
    main()
