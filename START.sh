###################################
# ASSIGN VARS
BASEDIR=$(dirname $0)
VSCODE="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"
FRONTENDDIR="$BASEDIR/frontend"

###################################
# LAUNCH VSCODE
cd ${BASEDIR}
"${VSCODE}" .

###################################
# OPEN TERMINALS
# OPEN A TERMINAL FOR GENERAL WORK (E.G. GIT AND TOUCH)
osascript <<EOD
	tell application "Terminal"
		do script "cd \"$BASEDIR\""
	end tell
EOD

# START GATSBY DEVELOPMENT
osascript <<EOD
	tell application "Terminal"
		do script "cd \"$BASEDIR\";gatsby develop"
	end tell
EOD