import * as AWS from 'aws-sdk';

const client = new AWS.S3({ region: 'eu-central-1' });

interface Chek73Props {
  whiteListedBucketNames?: string[];
}

export const handler = async (props?: Chek73Props) => {
  const bucketList = await client.listBuckets().promise();

  for (let bucket of bucketList.Buckets ?? []) {
    try {
      const params: AWS.S3.Types.GetBucketAclRequest = {
        Bucket: bucket.Name || '',
      };
      const bucketAcl = await client.getBucketAcl(params).promise();
      console.log(`bucketName=${bucket.Name}`);
      console.log(`bucketAcl=${JSON.stringify(bucketAcl)}`);

      for (let grant of bucketAcl.Grants ?? []) {
        if (grant.Grantee?.URI?.endsWith('/AllUsers') || grant.Grantee?.URI?.endsWith('/AuthenticatedUsers')) {
          if ((props?.whiteListedBucketNames?.findIndex(whiteListedBucketName => bucket.Name === whiteListedBucketName) ?? -1) !== -1) {
            continue;
          }
          return `failed ${bucket.Name} is public`;
        }
      }
    } catch (error) {
      // ignore errors like not existing bucket policy for now
    }
  }

  return 'ok';
};