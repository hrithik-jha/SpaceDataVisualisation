import requests
from bs4 import BeautifulSoup as sop
page = requests.get('https://cdaweb.gsfc.nasa.gov/pub/data/omni/low_res_omni/omni_m2017.dat')
soup = sop('page.text','html.parser')
soup2 = soup.text
values = []
valves = []
valves = soup2.split('\n')
for i in valves:
    values.append(i.split(' '))
for i in values:
    while '' in i:
            i.remove('')
import csv
with open('test.csv', 'w', newline = '') as fp:
    a = csv.writer(fp, delimiter = ',')
    a.writerows(values)

