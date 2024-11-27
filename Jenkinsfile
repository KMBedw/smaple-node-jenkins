pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
  }
}