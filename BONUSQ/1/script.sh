# folder with timestamp 
#inside the folder a file with with timestamp  inside whic date, time, username, path is stored

fol="$(date +%T)"
mkdir ~/bonusqstns/1/$fol/
cd $fol
fil="$(date +%T)"
touch ~/bonusqstns/1/$fol/$fil/
(date && date +%T && whoami && pwd) >> $fil
