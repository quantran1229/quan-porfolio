yarn && CI=false yarn build
rsync -rzav --delete -e "ssh -p 22" --progress --exclude 'node_modules' build/ root@quan1229.com:/home/FE/Porfolio