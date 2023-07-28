export const ns = {
  svg: 'http://www.w3.org/2000/svg',
  xmlns: 'http://www.w3.org/2000/xmlns/',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xlink: 'http://www.w3.org/1999/xlink',
  xhtml: 'http://www.w3.org/1999/xhtml'
}
export const svgVersion = '1.1'

export function createElement<T extends Element>(
  tagName: string,
  doc: Document = document
): T {
  return doc.createElement(tagName) as any as T
}

export function createElementNS<T extends Element>(
  tagName: string,
  namespaceURI: string = ns.xhtml,
  doc: Document = document
): T {
  return doc.createElementNS(namespaceURI, tagName) as any as T
}

export function createSvgElement<T extends SVGElement>(
  tagName: string,
  doc: Document = document
): T {
  return createElementNS<SVGElement>(tagName, ns.svg, doc) as T
}

export function createSvgDocument(content?: string) {
  if (content) {
    const xml = `<svg xmlns="${ns.svg}" xmlns:xlink="${ns.xlink}" version="${svgVersion}">${content}</svg>` // lgtm[js/html-constructed-from-input]
    const { documentElement } = parseXML(xml, { async: false })
    return documentElement as any as SVGSVGElement
  }

  const svg = document.createElementNS(ns.svg, 'svg')
  svg.setAttributeNS(ns.xmlns, 'xmlns:xlink', ns.xlink)
  svg.setAttribute('version', svgVersion)
  return svg as SVGSVGElement
}

export function parseXML(
  data: string,
  options: {
    async?: boolean
    mimeType?:
      | 'text/html'
      | 'text/xml'
      | 'application/xml'
      | 'application/xhtml+xml'
      | 'image/svg+xml'
  } = {}
) {
  let xml

  try {
    const parser = new DOMParser()
    if (options.async != null) {
      const instance = parser as any
      instance.async = options.async
    }
    xml = parser.parseFromString(data, options.mimeType || 'text/xml')
  } catch (error) {
    xml = undefined
  }

  if (!xml || xml.getElementsByTagName('parsererror').length) {
    throw new Error(`Invalid XML: ${data}`)
  }

  return xml
}

export function getTagName(node: Element, lowercase = true) {
  const nodeName = node.nodeName
  return lowercase ? nodeName.toLowerCase() : nodeName.toUpperCase()
}

export function remove(elem: Element) {
  if (elem.parentNode) {
    elem.parentNode.removeChild(elem)
  }
}
