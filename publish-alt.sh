git add .
git commit -m "$1"
git push
git pull -m "$1"

firebase deploy --only hosting
