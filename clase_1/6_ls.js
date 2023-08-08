const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

async function ls (route) {
  let files

  try {
    files = await fs.readdir(route) // listar los nombres de archivos y carpetas
  } catch (error) {
    console.error(pc.red(`No se logró leer la ruta ${route}`))
    console.error('Details: ', error)
    process.exit(1)
  }

  const maxLengthName = files.reduce((acc, ele) => {
    return Math.max(acc, ele.length)
  }, 20)

  const filesPromises = files.map(async file => {
    const filePath = path.join(route, file)
    let stats

    try {
      stats = await fs.stat(filePath) // obtener información del archivo
    } catch (error) {
      console.error(pc.red(`No se logró obtener el archivo ${filePath}`))
      console.error('Details: ', error)
      process.exit(1)
    }

    const isHidden = path.basename(file).startsWith('.')
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleDateString('es-CO')
    const filename = isHidden
      ? pc.gray(file.padEnd(maxLengthName))
      : pc.magenta(file.padEnd(maxLengthName))

    return `${pc.white(fileType)} ${filename} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

const folderInput = process.argv[2] ?? '.'
ls(folderInput)
