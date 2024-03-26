from PIL import Image
import os

INPUT_DIR = "D:\_Prog-Stuff\ImageToAscii\input"
OUTPUT_DIR = "D:\_Prog-Stuff\ImageToAscii\output"

def inFile(filename):
    return os.path.join(INPUT_DIR, filename)

def outFile(filename):
    return os.path.join(OUTPUT_DIR, filename)

# caracteres ascii usados para gerar o texto(output)
ASCII_CHARS = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]



def resize_image(image, new_width=100):
    width, height = image.size
    ratio = height/width
    new_height = int(new_width * ratio)
    resized_image = image.resize((new_width, new_height))
    return(resized_image)

# converte para preto e branco/escala de cinza
def transformGrayScale(img):
    w, h = img.size
    outImg = Image.new("RGB", (w,h))
    print(img.size)
    for x in range(w):
        for y in range(h):
            pixel = img.getpixel((x,y))
            lum = (pixel[0] + pixel[1] + pixel[2])//3
            outImg.putpixel((x,y), (lum,lum,lum))
    return outImg
            # outImage.putpixel((x,y),)


def transform(img):
    grayscale_image = img.convert("L")
    return(grayscale_image)

def toAscii(img):
    if img is None:
        return
    else:
        pixels = img.getdata()
        print(pixels)
        characters = "".join([ASCII_CHARS[pixel//25] for pixel in pixels])
        return (characters)


def main(newWidth = 200):
    # enterImg = input("Digite o nome do arquivo da imagem: ")
    godzilla = Image.open(inFile("godzila.jpeg"))

    # convertendo para Ascii
    godzillaNew = toAscii(transform(resize_image(godzilla)))

    # formatando
    pixelCount = len(godzillaNew)
    godzillaAscii = "\n".join([godzillaNew[i:(i + newWidth)] for i in range(0, pixelCount, newWidth)])

    # printando
    print(godzillaAscii)

    # salvando a imagem
    with open("godzilaAscii.txt", "w") as f:
        f.write(godzillaAscii)
        
    godzillaAscii.save(outFile("godzilaAscii.txt"))


main()
# inImage.show()


