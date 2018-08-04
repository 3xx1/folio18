from fabric.operations import put
from fabric.operations import sudo

deployLocation = "/var/www/3xx1.info"

def deploy_app():
    sudo("chmod 777 -R {0}".format(deployLocation))
    put("dist/portfolio18/*", deployLocation)
    put("dist/portfolio18/assets", deployLocation)
    sudo("chmod 755 -R {0}".format(deployLocation))

def hello(who="world"):
   print "Hello {who}!".format(who=who)
