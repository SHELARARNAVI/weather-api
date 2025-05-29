pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Code Quality') {
      steps {
        echo 'SonarQube or ESLint analysis would run here'
      }
    }

    stage('Security') {
      steps {
        echo 'Trivy or Snyk scan would run here'
      }
    }

    stage('Deploy') {
      steps {
        bat 'docker build -t weather-api .'
        bat 'docker run -d -p 3000:3000 weather-api'
      }
    }

    stage('Release') {
      steps {
        echo 'Release tagging or deployment to prod would go here'
      }
    }

    stage('Monitoring') {
      steps {
        echo 'Health check or monitoring alert setup would go here'
      }
    }
  }
}
