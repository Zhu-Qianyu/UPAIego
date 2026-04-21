$ErrorActionPreference = "Stop"

Write-Host "[UPAIego] Ensuring port 3000 is available..."
$listening = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue
if ($listening) {
  $pids = $listening | Select-Object -ExpandProperty OwningProcess -Unique
  foreach ($pid in $pids) {
    Write-Host "[UPAIego] Port 3000 occupied by PID $pid, stopping..."
    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
  }
}

Write-Host "[UPAIego] Checking dependencies..."
if (!(Test-Path "node_modules")) {
  Write-Host "[UPAIego] node_modules not found, running npm install..."
  npm install
}

Write-Host "[UPAIego] Starting local dev server on http://localhost:3000 ..."
npm run dev
