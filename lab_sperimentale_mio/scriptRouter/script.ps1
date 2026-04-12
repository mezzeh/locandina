# ================== CONFIG ==================
$BaseUrl  = "https://cp-dsu.unipi.it:8000"
$Username = ""
$Password = ""

# Accetta certificati self-signed (necessario)
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }

# Sessione persistente (cookie!)
$Session = New-Object Microsoft.PowerShell.Commands.WebRequestSession

# Header comuni (copiati dal browser)
$Headers = @{
    "User-Agent"       = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0"
    "Accept"           = "application/json, text/javascript, */*; q=0.01"
    "Accept-Language"  = "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7"
    "X-Requested-With" = "XMLHttpRequest"
}

Write-Host "`n[1] GET index.html (ottenere PHPSESSID)" -ForegroundColor Cyan

Invoke-WebRequest `
    -UseBasicParsing `
    -Uri "$BaseUrl/index.html" `
    -Method GET `
    -WebSession $Session `
    -Headers $Headers `
    -TimeoutSec 10 `
    | Out-Null

Write-Host "Cookie ottenuti:"
$Session.Cookies.GetCookies($BaseUrl) | ForEach-Object {
    Write-Host " - $($_.Name)=$($_.Value)"
}

Write-Host "`n[2] POST logon" -ForegroundColor Cyan

Invoke-WebRequest `
    -UseBasicParsing `
    -Uri "$BaseUrl/api/captiveportal/access/logon/" `
    -Method POST `
    -WebSession $Session `
    -Headers ($Headers + @{
        "Content-Type" = "application/x-www-form-urlencoded; charset=UTF-8"
        "Origin"       = $BaseUrl
        "Referer"      = "$BaseUrl/index.html"
    }) `
    -Body "user=$Username&password=$Password" `
    -TimeoutSec 10 `
    | Out-Null

Write-Host "Login inviato"

Start-Sleep 1

Write-Host "`n[3] POST status" -ForegroundColor Cyan

$status = Invoke-WebRequest `
    -UseBasicParsing `
    -Uri "$BaseUrl/api/captiveportal/access/status/" `
    -Method POST `
    -WebSession $Session `
    -Headers ($Headers + @{
        "Content-Type" = "application/x-www-form-urlencoded; charset=UTF-8"
        "Origin"       = $BaseUrl
        "Referer"      = "$BaseUrl/index.html"
    }) `
    -Body "user=&password=" `
    -TimeoutSec 10

Write-Host "`nSTATUS RESPONSE:"
$status.Content
