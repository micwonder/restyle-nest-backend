import { UserEntity } from 'src/users/entities/user.entity';
import { SENDGRID_HOST_MAIL } from 'src/environments';

export const sendTestMail = (
  userInfo: UserEntity,
  url: string,
): Promise<boolean> => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: userInfo.email, // Change to your recipient
    from: SENDGRID_HOST_MAIL, // Change to your verified sender
    subject: 'visualee.aiをご利用いただきありがとうございます。',
    text: '下のリンクをクリックしてサービスにログインしてください。',
    html: `<h1>🎉🎉Visualee.aiをご利用いただきありがとうございます。🎉🎉</h1>
    <h4>以下の確認を使用してアカウントにログインできます。</h4>
    <div style="margin: 0px 100px">
  <a href="${url}" style="margin: auto; background-color: #666cff; padding: 10px 40px; border-radius: 5px; color: white; text-decoration: none; ">確認する</a>
    </div> 
    <h4>ご利用についてご不明な点がございましたら下記メールにお問い合わせいただければ幸いです。</h4>
    <a style="text-decoration: none;" href="mailto:support@visualee.ai">~~~~~~~~~~~~~~~~~support@visualee.ai~~~~~~~~~~~~~~~~~</a>`,
  };

  return sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);

      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
