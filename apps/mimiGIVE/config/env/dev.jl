using Genie, Logging

Genie.Configuration.config!(
  server_port                     = 6543,
  server_host                     = "127.0.0.1",
  log_level                       = Logging.Info,
  log_to_file                     = false,
  server_handle_static_files      = true,
  path_build                      = "build",
  format_julia_builds             = true,
  format_html_output              = true,
  watch                           = true
)

ENV["JULIA_REVISE"] = "auto"