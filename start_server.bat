@echo off
echo Chess3D HTTP Sunucusu Başlatılıyor...
echo Sunucuyu durdurmak icin bu pencereyi kapatabilirsiniz.
echo Tarayicinizda http://localhost:8000 adresine giderek projeyi gorebilirsiniz.
python -m http.server 8000
pause