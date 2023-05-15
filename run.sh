#!/usr/bin/env bash

deploy_target=$1

if [[ $deploy_target == "deploy" ]]; then
	npm run build
	PORT=5005 node build
elif [[ $deploy_target  == "start" ]]; then
	PORT=5005 node build
else
	echo "Invalid deployment target specified! Must run as either:"
	echo "  ./run.sh deploy"
	echo "  ./run.sh run"
fi


