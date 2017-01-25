#!/bin/bash -eu

aws s3 sync ../app/ s3://webbcontracting  --delete --region us-east-1 --profile freelance
