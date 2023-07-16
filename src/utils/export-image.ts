//@ts-nocheck
import html2canvas from "html2canvas";
export const exportAsImage = async (element: any, imageFileName: any) => {
  const html = document.getElementsByTagName("html")[0];
  const body = document.getElementsByTagName("body")[0];
  let htmlWidth = html.clientWidth;
  let bodyWidth = body.clientWidth;
  const newWidth = element.scrollWidth - element.clientWidth;
  if (newWidth > element.clientWidth) {
    htmlWidth += newWidth;
    bodyWidth += newWidth;
  }
  html.style.width = htmlWidth + "px";
  body.style.width = bodyWidth + "px";
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);
  html.style.width = null;
  body.style.width = null;
  const arr = image.split(',')
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
