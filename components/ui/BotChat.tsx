import { useEffect } from 'react';

export default function BotChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.botpress) {
        window.botpress.on('webchat:ready', () => {
          window.botpress.close();
        });
        window.botpress.init({
          botId: '1ae0eadd-0bab-4110-8c5f-75fce3601d21',
          clientId: '229b8bcf-17ab-4867-bde9-55540a8b6bb4',
          selector: '#botchat',
          configuration: {
            website: {},
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
          },
        });
      }
    };
  }, []);

  return <div id="botchat" className="w-full h-[100px]" />;
}
