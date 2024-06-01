import React from 'react'


export function toCamelCase(text) {
    return text
      .toLowerCase()
      .replace(/([^a-zA-Z0-9]+)(.)/g, (match, delimiter, chr) => delimiter + chr.toUpperCase());
  }