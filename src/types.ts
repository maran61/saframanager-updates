export interface FileData {
  id: number;
  productName: string;
  version: string;
  description: string;
  fileName: string;
  downloadUrl: string;
  imageUrl: string;
  additionalInfo?: string;
}