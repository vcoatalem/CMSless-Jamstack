export AWS_PROFILE=jamstack

npm install
npm run build

aws s3 cp --recursive public/ s3://jamstack-public/ --cache-control 'public, max-age=300, s-maxage=315360000'

aws cloudfront create-invalidation --paths '/*' --distribution-id E11BSNHWM09WR