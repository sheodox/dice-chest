#!/usr/bin/env bash

deploy_target=$1

if [[ $deploy_target == "prod" ]]; then
	docker compose up --build -d
else
	echo "Invalid deployment target specified! Must run as either:"
	echo "  ./run.sh prod"
fi


