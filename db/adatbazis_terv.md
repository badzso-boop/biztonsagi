Adatbázis terv
==============


user
    id
    email           - ezzel loginol
    password        - hash
    realname        - teljes név
    perm_article    - igen/nem  (szerkesztői joga van -e)
    perm_admin      - igen/nem  (admin joga van -e)

article
    id
    user_id         - a cikk szerzője (user tábla id FKEY)
    title           - cikk címe
    content         - HTML tartalom
    need_moderate   - igen(!)/nem  (nem esetén a cikk publikálva van, igen esetén csak az admin látja)
    created         - időbélyeg, amikor a cikk készült

topic
    id
    user_id         - FKEY (a témát létrehozó user azonosítója)
    title           - téma neve/címe/tárgya, nem tudom hogy hívjuk
    created         - időbélyeg

post
    id
    topic_id        - FKEY  (melyik topic-hoz tartozik a hozzászólás)
    user_id         - FKEY  (melyik user szólt hozzá)
    content         - szöveges tartalom
    created         - időbélyeg


