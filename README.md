# projetwf3

PIERRE  : PAGE D'ACCEUIL ET NAVBAR

TITOUAN  :  GROUPE ET MEDIAS

ARNAUD : CONTACT ET EVENT


Pour clôner le dépôt git il faut faire ça : 

git init

git clone https://github.com/TitouanBOURLARD/projetwf3.git

ENSUITE IL FAUT SE METTRE SUR VOTRE BRANCHE POUR PAS MODIFIER LE TRAVAIL DES AUTRES

POUR CA ON FAIT  : 

git branch -a 

CA VA NOUS AFFICHER LES BRANCHES QUI EXISTENT 

ENSUITE :

git checkout Pierre
ou
git checkout Arnaud
ou 
git checkout main

travaillez sur votre branche pas sur la main

UNE FOIS QUE VOUS AVEZ FINI QUELQUE CHOSE SUR VOTRE BRANCH, POUR L'ENVOYER SUR LE REPOSITORY VOUS FAITES  :

git add .

git commit -m "le nom de la modification"

git push -u origin Pierre
ou 
git push -u origin Arnaud

VOUS FAITES LE PUSH SUR LA BRANCHE SUR LAQUELLE VOUS AVEZ BOSSÉ

POUR METTRE EN COMMUN SUR LA BRANCHE MAIN, ON SE CAPTERA EN VOCAL POUR VERIFER TOUTES LES MODIFICATIONS AFIN D'ASSURE UN PUSH SUR LA BRANCHE MAIN QUI SOIT CORRECT ET ON LE FERA VIA GITHUB DIRECTEMENT
