FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BlackVampired/Amdibell /root/Amdibell
WORKDIR /root/Amdibell/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "amdibell.js"]

