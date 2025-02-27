import { QrCodeContainer } from "./styles";

type QrCodeProps = {
  text: string;
};

export const QrCode = ({ text }: QrCodeProps) => (
  <QrCodeContainer>
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${text}`}
      alt="QR Code"
    />
  </QrCodeContainer>
);
export default QrCode;
