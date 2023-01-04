# aade-mydata-login
javascript code for auto login to https://mydata.aade.gr
Version: 1.0.0
Author: Lefteris Saroukos
Author URL: https://lsaroukos.gr

## 1. Περιγραφή
Τα πεδία στη σελίδα της ΑΑΔΕ δεν είναι τύπου password, και έτσι τα προγράμματα περιήγησης (οπως ο firefox ή chrome) δεν δίνουν τη δυνατότητα αποθήκευσης των στοιχείων.
Αυτός ο κώδικας μπορεί να χρησιμοποιηθεί για την αυτόματη συμπλήρωση των πεδίων "ΑΦΜ" και "Subscription Key" στη σελίδα της ααδε.

## 2. Οδηγίες
Σε αυτήν την πρώτη του έκδωση, ο κώδικας μπορεί να φορτωθεί μέσω κάποιου τρίτου plugin, όπως το "Custom Style Script" (Δείτε παρακάτω τις σχετικές υποενότητες)
Βήμα 1: πορσθέτουμε τα δικά μας στοιχεία στον κώδικα.
Στο παρακάτω σημείο του κώδικα αλλάζουμε τις τιμές eg_username_1, eg_afm_1, egk_key_1 με το όνομα χρήστη μας, αφμ και subscription key μας αντίστοιχα.
  {
      username : 'eg_username_1',
      afm : 'eg_afm_1',
      key : 'eg_key_1'
  },
 Αν επιθυμούμε να συνδέονται περισσότεροι χρήστες από τον υπολογιστή μας, σε μια νέα σειρά μετά από το κόμμα, μπορούμε να προσθέσουμε περισσότερα στοιχεία σύνδεσης:
 π.χ.
 {
      username : 'eg_username_1',
      afm : 'eg_afm_1',
      key : 'eg_key_1'
  },
  {
      username : 'eg_username_2',
      afm : 'eg_afm_2',
      key : 'eg_key_2'
  },
Έπειτα, φορτώνουμε τον κώδικα στο plugin και αφού πληκτρολογήσουμε το όνομα χρήστη μας στο πεδίο username, θα πρέπει να δούμε τα υπόλοιπα πεδία (ΑΦΜ, Subscription Key) να συμπληρώνονται αυτόματα

### 2.1 firefox
https://addons.mozilla.org/en-US/firefox/addon/custom-style-script/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search

### 2.2 Chrome
https://chrome.google.com/webstore/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij?hl=en

### 2.3 Edge
https://microsoftedge.microsoft.com/addons/detail/custom-style-script/eocdolakkgkbmnfojgicnicdnmimfhoo?hl=en

