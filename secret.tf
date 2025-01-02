resource "aws_secretsmanager_secret" "secret" {
  name = "publikes-prd/secret"

  lifecycle {
    prevent_destroy = true
  }
}
