package environment

import (
	"os"
)

func SetEnviornmentVariables() {
	os.Setenv("SERVER_NAME", "localhost:3306")
	os.Setenv("USER", "Caleb")
	os.Setenv("PASSWORD", "7JollyIsland!")
	os.Setenv("DATABASE_NAME", "posty")
}
