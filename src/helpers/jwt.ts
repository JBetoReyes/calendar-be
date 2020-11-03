import {sign} from 'jsonwebtoken';

// eslint-disable-next-line @typescript-eslint/ban-types
export const generateJWT = <T extends Object>(payload: T): Promise<string> => {
  return new Promise((resolve, reject) => {
    sign(
      payload,
      process.env.JWT_SECRET as string,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          reject(new Error('Error while generating token'));
          return;
        }
        resolve(token);
      },
    );
  });
};
