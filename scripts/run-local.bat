@echo off
setlocal

echo [UPAIego] Ensuring port 3000 is available...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
  echo [UPAIego] Port 3000 occupied by PID %%a, stopping...
  taskkill /PID %%a /F >nul 2>nul
)

echo [UPAIego] Checking dependencies...
if not exist node_modules (
  echo [UPAIego] node_modules not found, running npm install...
  call npm install
  if errorlevel 1 (
    echo [UPAIego] npm install failed.
    exit /b 1
  )
)

echo [UPAIego] Starting local dev server on http://localhost:3000 ...
call npm run dev

endlocal
