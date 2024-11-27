pipeline {
  agent {
        docker {
            image 'node:18' 
        }
    }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install & Test') {
      steps {
        sh 'npm install'
        sh 'npm test'
      }
      post {
            success {
                echo "Les tests sont passés avec succès."
            }
            failure {
                echo "Les tests ont échoué. Vérifiez les résultats des tests pour plus d'informations."
            }
        }
    }
  }
}