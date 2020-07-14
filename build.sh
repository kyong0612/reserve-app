#!/bin/sh

set -xeu

if [ "$ENV" = "test" ]; then
	export NG_CMD="ng build"
elif [ "$ENV" = "prod" ]; then
	export NG_CMD="ng build --prod"
fi

$NG_CMD