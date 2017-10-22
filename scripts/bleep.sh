 #!/bin/bash
hostname=`hostname -A | tr -d " "`
while [ 1 = 1 ]
do
 	curl -s http://${hostname}:18080 | grep -oP 'hostname\: [a-f0-9]*'
 	sleep 1
done