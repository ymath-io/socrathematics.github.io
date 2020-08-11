git add .
git commit -m "$1"
git pull -m "$1"
git push

firebase deploy --only hosting