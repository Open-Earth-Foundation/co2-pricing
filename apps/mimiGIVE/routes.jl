using Genie, Genie.Requests, Genie.Renderer.Json
using Mimi
using MimiGIVE
using Dates

route("/") do
    # Get the Social Cost of CO2 in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()

    #Input Year
    current_year = string(Dates.year(today()))
    input_year = parse(Int64, params(:year, current_year))

    #input eta
    input_eta = parse(Float64, params(:eta, "0"))

    #input prtp
    input_prtp = parse(Float64, params(:prtp, "0.015"))

    #input last_year
    input_last_year = parse(Int64, params(:last_year, "2300"))

    #input pulse_size
    pulse_size = parse(Float64, params(:pulse_size, "10000000"))

    scc = MimiGIVE.compute_scc(m, year = input_year, eta = input_eta, prtp = input_prtp, last_year = input_last_year, pulse_size = pulse_size)
    adjusted = scc * 1.57
    result = "{\"raw\": $scc, \"adjusted\": $adjusted}"
  end

  route("/default") do
    # Get the Social Cost of CO2 in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()

    #Input Year
    current_year = string(Dates.year(today()))
    input_year = parse(Int64, params(:year, current_year))

    input_prtp = parse(Float64, params(:prtp, "0.015"))

    scc = MimiGIVE.compute_scc(m, year = input_year, prtp = input_prtp)
  end


  route("/co2") do
    # Get the Social Cost of CO2 in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()

    #Input Year
    current_year = string(Dates.year(today()))
    input_year = parse(Int64, params(:year, current_year))

    #input eta
    input_eta = parse(Float64, params(:eta, "0"))

    #input prtp
    input_prtp = parse(Float64, params(:prtp, "0.015"))

    #input last_year
    input_last_year = parse(Int64, params(:last_year, "3000"))

    #input pulse_size
    pulse_size = parse(Float64, params(:pulse_size, "10000000"))

    scc = MimiGIVE.compute_scc(m, year = input_year, eta = input_eta, prtp = input_prtp, last_year = input_last_year, pulse_size = pulse_size)
  end

  route("/test") do
    # Get the Social Cost of CO2 in year 2020 from the default MimiGIVE model:
    test = "working"
  end

  route("/n2o") do
    # Get the Social Cost of N2O in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()

    #Input Year
    current_year = string(Dates.year(today()))
    input_year = parse(Int64, params(:year, current_year))

    #input eta
    input_eta = parse(Float64, params(:eta, "0"))

    #input prtp
    input_prtp = parse(Float64, params(:prtp, "0.015"))

    #input last_year
    input_last_year = parse(Int64, params(:last_year, "3000"))

    #input pulse_size
    pulse_size = parse(Float64, params(:pulse_size, "10000000"))

    scc = MimiGIVE.compute_scn2o(m, year = input_year, eta = input_eta, prtp = input_prtp, last_year = input_last_year, pulse_size = pulse_size)
  end

  route("/ch4") do
    # Get the Social Cost of CH4 in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()

    #Input Year
    current_year = string(Dates.year(today()))
    input_year = parse(Int64, params(:year, current_year))

    #input eta
    input_eta = parse(Float64, params(:eta, "0"))

    #input prtp
    input_prtp = parse(Float64, params(:prtp, "0.015"))

    #input last_year
    input_last_year = parse(Int64, params(:last_year, "3000"))

    #input pulse_size
    pulse_size = parse(Float64, params(:pulse_size, "10000000"))

    scc = MimiGIVE.compute_scch4(m, year = input_year, eta = input_eta, prtp = input_prtp, last_year = input_last_year, pulse_size = pulse_size)
  end

  route("/sf6") do
    # Get the Social Cost of SF6 in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()

    #Input Year
    current_year = string(Dates.year(today()))
    input_year = parse(Int64, params(:year, current_year))

    #input eta
    input_eta = parse(Float64, params(:eta, "0"))

    #input prtp
    input_prtp = parse(Float64, params(:prtp, "0.015"))

    #input last_year
    input_last_year = parse(Int64, params(:last_year, "3000"))

    #input pulse_size
    pulse_size = parse(Float64, params(:pulse_size, "10000000"))

    scc = MimiGIVE.compute_scsf6(m, year = input_year, eta = input_eta, prtp = input_prtp, last_year = input_last_year, pulse_size = pulse_size)
  end

  route("/chainlink/co2", method = POST) do
    # Get the Social Cost of CO2 in year 2020 from the default MimiGIVE model:
    m = MimiGIVE.get_model()
    @show jsonpayload()

    #Input Year
    input_year = parse(Int64, jsonpayload()["data"]["year"])
    @show input_year

    #input prtp
    input_prtp = parse(Float64, jsonpayload()["data"]["discount_rate"])
    @show input_prtp

    #input eta
    input_eta = parse(Float64, params(:eta, "0"))

    #input last_year
    input_last_year = parse(Int64, params(:last_year, "3000"))

    #input pulse_size
    pulse_size = parse(Float64, params(:pulse_size, "10000000"))

    scc = MimiGIVE.compute_scc(m, year = input_year, eta = input_eta, prtp = input_prtp, last_year = input_last_year, pulse_size = pulse_size)
    @show scc
    "{\"jobRunID\":0,\"data\":{\"result\":$(scc)},\"result\":$(scc),\"statusCode\":200}"
  end