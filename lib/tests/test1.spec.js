'use strict'

let chai = require('chai')
const chaiFiles = require('chai-files')
chai.use(chaiFiles)
const expect = chai.expect
const file = chaiFiles.file

describe('default_project', () => {
  it('should have styles.scss', () => {
    let stylesheet = './src/assets/stylesheets/styles.scss'
    expect(file(stylesheet)).to.exist
  })
})
