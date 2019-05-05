#!/usr/bin/env bash
# this script does the following:
# - clone the search repo in the githubpages branch
# - adds, commits and push the file to the branch

set -e

REPO_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

GHPAGES_DIR=$REPO_DIR/../timebox-githupage
[[ ! -d "$GHPAGES_DIR" ]] && {
	git clone "$REPO_DIR" "$GHPAGES_DIR"
	cd "$GHPAGES_DIR"
	git remote rm origin
	git remote add origin git@github.com:jeanCarloMachado/timebox.git
}


cd "$GHPAGES_DIR"

git fetch
git checkout gh-pages
git reset --hard origin/gh-pages
cp -rf ../timebox/resources/public/* .
git add .
git commit -m 'new version'
git push origin gh-pages
