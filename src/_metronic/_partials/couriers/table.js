/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers";

function CouriersTable({ className }) {
    const [key, setKey] = useState("Month");

    return (
        <div className={`card card-custom ${className}`}>
            {/* Head */}
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label font-weight-bolder text-dark">
                        New Arrivals Couriers
          </span>
                    <span className="text-muted mt-3 font-weight-bold font-size-sm">
                        More than 30+ new Couriers
          </span>
                </h3>
            </div>
            {/* Body */}
            <div className="card-body pt-3 pb-0">
                <div className="table-responsive">
                    <table className="table table-borderless table-vertical-center">
                        <thead>
                            <tr>
                                <th className="p-0" style={{ width: "50px" }} />
                                <th className="p-0" style={{ minWidth: "200px" }} />
                                <th className="p-0" style={{ minWidth: "100px" }} />
                                <th className="p-0" style={{ minWidth: "125px" }} />
                                <th className="p-0" style={{ minWidth: "110px" }} />
                                <th className="p-0" style={{ minWidth: "150px" }} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pl-0 py-4">
                                    <div className="symbol symbol-50 symbol-light mr-1">
                                        <span className="symbol-label">
                                            <SVG
                                                src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                                                className="h-50 align-self-center"
                                            ></SVG>
                                        </span>
                                    </div>
                                </td>
                                <td className="pl-0">
                                    <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                    >
                                        Courier 1
                  </a>
                                    <div>
                                        <span className="font-weight-bolder">Location:</span>{" "}
                                        <a
                                            className="text-muted font-weight-bold text-hover-primary"
                                            href="#"
                                        >
                                            xxx-12 AbuDabhi
                    </a>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Shipment Number
                  </span>
                                    <span className="text-muted font-weight-bold">0000023</span>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Courier Type
                  </span>
                                    <span className="text-muted font-weight-bold">Mobile Phone</span>
                                </td>
                                <td className="text-right">
                                    <span className="label label-lg label-light-primary label-inline">
                                        Pending
                  </span>
                                </td>
                                <td className="text-right pr-0">
                                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/Communication/Write.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-light btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/General/Trash.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-0 py-4">
                                    <div className="symbol symbol-50 symbol-light mr-1">
                                        <span className="symbol-label">
                                            <SVG
                                                src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                                                className="h-50 align-self-center"
                                            ></SVG>
                                        </span>
                                    </div>
                                </td>
                                <td className="pl-0">
                                    <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                    >
                                        Courier 1
                  </a>
                                    <div>
                                        <span className="font-weight-bolder">Location:</span>{" "}
                                        <a
                                            className="text-muted font-weight-bold text-hover-primary"
                                            href="#"
                                        >
                                            xxx-12 AbuDabhi
                    </a>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Shipment Number
                  </span>
                                    <span className="text-muted font-weight-bold">0000023</span>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Courier Type
                  </span>
                                    <span className="text-muted font-weight-bold">Mobile Phone</span>
                                </td>
                                <td className="text-right">
                                    <span className="label label-lg label-light-primary label-inline">
                                        Pending
                  </span>
                                </td>
                                <td className="text-right pr-0">
                                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/Communication/Write.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-light btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/General/Trash.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-0 py-4">
                                    <div className="symbol symbol-50 symbol-light mr-1">
                                        <span className="symbol-label">
                                            <SVG
                                                src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                                                className="h-50 align-self-center"
                                            ></SVG>
                                        </span>
                                    </div>
                                </td>
                                <td className="pl-0">
                                    <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                    >
                                        Courier 1
                  </a>
                                    <div>
                                        <span className="font-weight-bolder">Location:</span>{" "}
                                        <a
                                            className="text-muted font-weight-bold text-hover-primary"
                                            href="#"
                                        >
                                            xxx-12 AbuDabhi
                    </a>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Shipment Number
                  </span>
                                    <span className="text-muted font-weight-bold">0000023</span>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Courier Type
                  </span>
                                    <span className="text-muted font-weight-bold">Mobile Phone</span>
                                </td>
                                <td className="text-right">
                                    <span className="label label-lg label-light-primary label-inline">
                                        Pending
                  </span>
                                </td>
                                <td className="text-right pr-0">
                                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/Communication/Write.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-light btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/General/Trash.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-0 py-4">
                                    <div className="symbol symbol-50 symbol-light mr-1">
                                        <span className="symbol-label">
                                            <SVG
                                                src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                                                className="h-50 align-self-center"
                                            ></SVG>
                                        </span>
                                    </div>
                                </td>
                                <td className="pl-0">
                                    <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                    >
                                        Courier 1
                  </a>
                                    <div>
                                        <span className="font-weight-bolder">Location:</span>{" "}
                                        <a
                                            className="text-muted font-weight-bold text-hover-primary"
                                            href="#"
                                        >
                                            xxx-12 AbuDabhi
                    </a>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Shipment Number
                  </span>
                                    <span className="text-muted font-weight-bold">0000023</span>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Courier Type
                  </span>
                                    <span className="text-muted font-weight-bold">Mobile Phone</span>
                                </td>
                                <td className="text-right">
                                    <span className="label label-lg label-light-primary label-inline">
                                        Pending
                  </span>
                                </td>
                                <td className="text-right pr-0">
                                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/Communication/Write.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-light btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/General/Trash.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-0 py-4">
                                    <div className="symbol symbol-50 symbol-light mr-1">
                                        <span className="symbol-label">
                                            <SVG
                                                src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                                                className="h-50 align-self-center"
                                            ></SVG>
                                        </span>
                                    </div>
                                </td>
                                <td className="pl-0">
                                    <a
                                        href="#"
                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                    >
                                        Courier 1
                  </a>
                                    <div>
                                        <span className="font-weight-bolder">Location:</span>{" "}
                                        <a
                                            className="text-muted font-weight-bold text-hover-primary"
                                            href="#"
                                        >
                                            xxx-12 AbuDabhi
                    </a>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Shipment Number
                  </span>
                                    <span className="text-muted font-weight-bold">0000023</span>
                                </td>
                                <td className="text-right">
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                        Courier Type
                  </span>
                                    <span className="text-muted font-weight-bold">Mobile Phone</span>
                                </td>
                                <td className="text-right">
                                    <span className="label label-lg label-light-primary label-inline">
                                        Pending
                  </span>
                                </td>
                                <td className="text-right pr-0">
                                    <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/Communication/Write.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-light btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                            <SVG
                                                src={toAbsoluteUrl(
                                                    "/media/svg/icons/General/Trash.svg"
                                                )}
                                            ></SVG>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CouriersTable