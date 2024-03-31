import { createFileRoute } from "@tanstack/react-router";
import { Col, Row} from "antd";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return <Row gutter={[16, 24]} style={{marginTop: '20px'}}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          Это тело
        </Col>
    </Row>

}