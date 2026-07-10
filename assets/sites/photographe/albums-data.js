/* =========================================================================
   albums-data.js
   -------------------------------------------------------------------------
   ⚠️ AVERTISSEMENT IMPORTANT — À LIRE AVANT TOUTE UTILISATION RÉELLE ⚠️

   Ce fichier n'est PAS un système de sécurité. C'est une démonstration
   de portfolio qui simule un "espace clients" entièrement côté navigateur.

   Concrètement :
   - N'IMPORTE QUI peut ouvrir ce fichier (clic droit → "Afficher le code
     source" sur espace-clients.html, ou taper l'URL directement) et voir
     TOUS les codes et TOUS les liens vers TOUS les albums, y compris ceux
     d'autres clients.
   - Les pages d'album elles-mêmes ne sont protégées par rien : leur URL
     fonctionne pour quiconque la devine ou la trouve, code ou pas.
   - Il n'y a aucune vérification serveur : tout se passe dans le
     navigateur du visiteur.

   → Pour de vraies photos privées (mariages, shootings), ce mécanisme
   n'offre AUCUNE confidentialité réelle. Pour une vraie protection il
   faut soit :
     1) un hébergement Apache (comme O2switch) + une protection .htaccess
        par dossier (solution robuste, sans base de données) ;
     2) un vrai service de galerie professionnelle (Pic-Time, Pixieset,
        ShootProof...), pensé pour ce cas d'usage précis.

   Ce fichier ne doit être utilisé QUE pour présenter le concept dans un
   portfolio, jamais pour livrer de vraies photos de clients.
   ========================================================================= */

const ALBUMS = {
  "MARTIN-DUBOIS-2026": {
    nom: "Mariage Martin & Dubois",
    url: "albums/mariage-martin-dubois.html"
  },
  "JULIE-0472": {
    nom: "Shooting privé — Julie",
    url: "albums/shooting-julie.html"
  }
};
