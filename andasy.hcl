# andasy.hcl app configuration file generated for uraceiot on Tuesday, 21-Apr-26 07:03:55 EET
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "uraceiot"

app {

  env = {}

  port = 80

  primary_region = "kgl"

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "uraceiot"
  }

}
