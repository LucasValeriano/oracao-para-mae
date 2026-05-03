import urllib.request, re

url = 'https://html.duckduckgo.com/html/?q=selo+garantia+15+dias'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'src="(//external-content\.duckduckgo\.com/iu/\?u=[^"]+)"', html)
    if images:
        img_url = 'https:' + images[0]
        print(f'Found URL: {img_url}')
        
        req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_img) as response, open(r'D:\03 - Ofertas\Rezas para o dia das mães\public\assets\garantia_15_dias.png', 'wb') as out_file:
            out_file.write(response.read())
        print('Downloaded successfully.')
    else:
        print('No images found.')
except Exception as e:
    print(f'Error: {e}')
