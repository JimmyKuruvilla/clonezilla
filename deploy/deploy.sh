#!/bin/bash -eu

aws s3 sync ../app/ s3://maxwellsmallenginerepair  --delete --region us-east-1 --profile freelance
