const fs = require('fs'); //para interactuar con los archivos del sistema 
const path = require('path');//para trabajar las rutas

// Define los nombres de la carpeta y el archivo
const folderName = 'mi_carpeta';
const fileName = 'mi_archivo.txt';
const fileContent = 'Hola, mundo!';

// Ruta completa de la carpeta y el archivo
const folderPath = path.join(__dirname, folderName);
const filePath = path.join(folderPath, fileName);

// Crear la carpeta-----mkdir(crear un directorio)
fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) { m
        console.error('Error al crear la carpeta:', err);
        return;
    }

    console.log('Carpeta creada exitosamente.');

    // Crear el archivo dentro de la carpeta-----write file (escribir o crear el archivo)
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error('Error al crear el archivo:', err);
            return;
        }

        console.log('Archivo creado exitosamente.');

        // Leer el archivo-----readfile(leer el archivo)
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }

            console.log('Contenido del archivo:', data);

            // Borrar el archivo---unlink(eliminar archivos o enlaces)
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error al borrar el archivo:', err);
                    return;
                }

                console.log('Archivo borrado exitosamente.');

                // Borrar la carpeta-----rmdir(eliminar un directorio)
                fs.rmdir(folderPath, { recursive: true }, (err) => {
                    if (err) {
                        console.error('Error al borrar la carpeta:', err);
                        return;
                    }

                    console.log('Carpeta borrada exitosamente.');
                });
            });
        });
    });
});